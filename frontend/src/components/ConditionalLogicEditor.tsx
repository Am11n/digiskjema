import React, { useState } from 'react';

interface Condition {
  id: string;
  fieldId: string;
  operator: 'equals' | 'notEquals' | 'contains' | 'greaterThan' | 'lessThan' | 'isEmpty' | 'isNotEmpty';
  value: string;
}

interface Action {
  id: string;
  type: 'show' | 'hide' | 'require' | 'enable' | 'disable';
  targetFieldId: string;
}

interface Rule {
  id: string;
  name: string;
  conditions: Condition[];
  actions: Action[];
  logicType: 'all' | 'any'; // all = AND, any = OR
}

interface ConditionalLogicEditorProps {
  fields: { id: string; label: string; type: string }[];
  rules: Rule[];
  onSave: (rules: Rule[]) => void;
}

const ConditionalLogicEditor: React.FC<ConditionalLogicEditorProps> = ({ fields, rules, onSave }) => {
  const [currentRules, setCurrentRules] = useState<Rule[]>(rules);
  const [newRuleName, setNewRuleName] = useState('');
  const [editingRuleId, setEditingRuleId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const addRule = () => {
    if (newRuleName.trim()) {
      const newRule: Rule = {
        id: `rule-${Date.now()}`,
        name: newRuleName,
        conditions: [],
        actions: [],
        logicType: 'all'
      };
      setCurrentRules([...currentRules, newRule]);
      setNewRuleName('');
      setEditingRuleId(newRule.id);
      setShowAddForm(false);
    }
  };

  const updateRule = (ruleId: string, updates: Partial<Rule>) => {
    setCurrentRules(currentRules.map(rule => 
      rule.id === ruleId ? { ...rule, ...updates } : rule
    ));
  };

  const addCondition = (ruleId: string) => {
    const newCondition: Condition = {
      id: `cond-${Date.now()}`,
      fieldId: fields[0]?.id || '',
      operator: 'equals',
      value: ''
    };
    
    updateRule(ruleId, {
      conditions: [...(currentRules.find(r => r.id === ruleId)?.conditions || []), newCondition]
    });
  };

  const updateCondition = (ruleId: string, conditionId: string, updates: Partial<Condition>) => {
    const rule = currentRules.find(r => r.id === ruleId);
    if (rule) {
      const updatedConditions = rule.conditions.map(cond => 
        cond.id === conditionId ? { ...cond, ...updates } : cond
      );
      updateRule(ruleId, { conditions: updatedConditions });
    }
  };

  const removeCondition = (ruleId: string, conditionId: string) => {
    const rule = currentRules.find(r => r.id === ruleId);
    if (rule) {
      const updatedConditions = rule.conditions.filter(cond => cond.id !== conditionId);
      updateRule(ruleId, { conditions: updatedConditions });
    }
  };

  const addAction = (ruleId: string) => {
    const newAction: Action = {
      id: `act-${Date.now()}`,
      type: 'show',
      targetFieldId: fields[0]?.id || ''
    };
    
    updateRule(ruleId, {
      actions: [...(currentRules.find(r => r.id === ruleId)?.actions || []), newAction]
    });
  };

  const updateAction = (ruleId: string, actionId: string, updates: Partial<Action>) => {
    const rule = currentRules.find(r => r.id === ruleId);
    if (rule) {
      const updatedActions = rule.actions.map(act => 
        act.id === actionId ? { ...act, ...updates } : act
      );
      updateRule(ruleId, { actions: updatedActions });
    }
  };

  const removeAction = (ruleId: string, actionId: string) => {
    const rule = currentRules.find(r => r.id === ruleId);
    if (rule) {
      const updatedActions = rule.actions.filter(act => act.id !== actionId);
      updateRule(ruleId, { actions: updatedActions });
    }
  };

  const deleteRule = (ruleId: string) => {
    setCurrentRules(currentRules.filter(rule => rule.id !== ruleId));
    if (editingRuleId === ruleId) {
      setEditingRuleId(null);
    }
  };

  const saveRules = () => {
    onSave(currentRules);
  };

  return (
    <div className="conditional-logic-editor">
      <div className="editor-header">
        <h2>Betingede regler</h2>
        <div className="editor-actions">
          <button className="primary-button" onClick={saveRules}>
            Lagre regler
          </button>
        </div>
      </div>

      <div className="rules-list">
        {currentRules.map(rule => (
          <div key={rule.id} className="rule-card">
            <div className="rule-header">
              <h3 
                onClick={() => setEditingRuleId(editingRuleId === rule.id ? null : rule.id)}
                className="rule-name"
              >
                {rule.name} 
                <span className="toggle-icon">
                  {editingRuleId === rule.id ? '▲' : '▼'}
                </span>
              </h3>
              <button 
                className="danger-button"
                onClick={() => deleteRule(rule.id)}
                aria-label={`Slett regel ${rule.name}`}
              >
                Slett
              </button>
            </div>

            {editingRuleId === rule.id && (
              <div className="rule-editor">
                <div className="logic-type-selector">
                  <label>
                    Logikktype:
                    <select
                      value={rule.logicType}
                      onChange={(e) => updateRule(rule.id, { logicType: e.target.value as 'all' | 'any' })}
                    >
                      <option value="all">Alle betingelser må være sanne (OG)</option>
                      <option value="any">Minst en betingelse må være sann (ELLER)</option>
                    </select>
                  </label>
                </div>

                <div className="conditions-section">
                  <h4>Betingelser</h4>
                  {rule.conditions.map(condition => (
                    <div key={condition.id} className="condition-row">
                      <select
                        value={condition.fieldId}
                        onChange={(e) => updateCondition(rule.id, condition.id, { fieldId: e.target.value })}
                      >
                        {fields.map(field => (
                          <option key={field.id} value={field.id}>
                            {field.label}
                          </option>
                        ))}
                      </select>

                      <select
                        value={condition.operator}
                        onChange={(e) => updateCondition(rule.id, condition.id, { operator: e.target.value as any })}
                      >
                        <option value="equals">er lik</option>
                        <option value="notEquals">er ikke lik</option>
                        <option value="contains">inneholder</option>
                        <option value="greaterThan">er større enn</option>
                        <option value="lessThan">er mindre enn</option>
                        <option value="isEmpty">er tom</option>
                        <option value="isNotEmpty">er ikke tom</option>
                      </select>

                      {condition.operator !== 'isEmpty' && condition.operator !== 'isNotEmpty' && (
                        <input
                          type="text"
                          value={condition.value}
                          onChange={(e) => updateCondition(rule.id, condition.id, { value: e.target.value })}
                          placeholder="Verdi"
                        />
                      )}

                      <button 
                        className="danger-button"
                        onClick={() => removeCondition(rule.id, condition.id)}
                        aria-label="Fjern betingelse"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button 
                    className="secondary-button"
                    onClick={() => addCondition(rule.id)}
                  >
                    + Legg til betingelse
                  </button>
                </div>

                <div className="actions-section">
                  <h4>Handlinger</h4>
                  {rule.actions.map(action => (
                    <div key={action.id} className="action-row">
                      <select
                        value={action.type}
                        onChange={(e) => updateAction(rule.id, action.id, { type: e.target.value as any })}
                      >
                        <option value="show">Vis felt</option>
                        <option value="hide">Skjul felt</option>
                        <option value="require">Gjør felt påkrevd</option>
                        <option value="enable">Aktiver felt</option>
                        <option value="disable">Deaktiver felt</option>
                      </select>

                      <select
                        value={action.targetFieldId}
                        onChange={(e) => updateAction(rule.id, action.id, { targetFieldId: e.target.value })}
                      >
                        {fields.map(field => (
                          <option key={field.id} value={field.id}>
                            {field.label}
                          </option>
                        ))}
                      </select>

                      <button 
                        className="danger-button"
                        onClick={() => removeAction(rule.id, action.id)}
                        aria-label="Fjern handling"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                  <button 
                    className="secondary-button"
                    onClick={() => addAction(rule.id)}
                  >
                    + Legg til handling
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {showAddForm ? (
          <div className="add-rule-form">
            <input
              type="text"
              value={newRuleName}
              onChange={(e) => setNewRuleName(e.target.value)}
              placeholder="Navn på ny regel"
              aria-label="Navn på ny regel"
            />
            <div className="form-actions">
              <button className="primary-button" onClick={addRule}>
                Opprett regel
              </button>
              <button 
                className="secondary-button" 
                onClick={() => setShowAddForm(false)}
              >
                Avbryt
              </button>
            </div>
          </div>
        ) : (
          <button 
            className="secondary-button add-rule-button"
            onClick={() => setShowAddForm(true)}
          >
            + Legg til ny regel
          </button>
        )}
      </div>
    </div>
  );
};

export default ConditionalLogicEditor;