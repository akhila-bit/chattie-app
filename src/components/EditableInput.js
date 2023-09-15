import { useCallback, useState } from 'react';
import { Alert, Icon, Input, InputGroup } from 'rsuite';

export const EditableInput = ({
  inputValue,
  onSave,
  label = null,
  placeholder = 'Wite name',
  isemptyMsg = 'Input is empty',
  ...input
}) => {
  const [inputv, setInput] = useState(inputValue);
  const [isEditable, setisEditable] = useState(false);
  const onInputCANGE = useCallback(VALUE => {
    setInput(VALUE);
  }, []);

  const onEditClick = useCallback(() => {
    setisEditable(p => !p);
    setInput(inputValue);
  }, [inputValue]);

  const onSaveClick = async () => {
    const t = inputv.trim();
    if (t === '') {
      Alert.info(isemptyMsg, 4000);
    }
    if (t !== inputValue) {
      await onSave(t);
    }
    setisEditable(false);
  };

  return (
    <div>
      {label}

      <InputGroup>
        <Input
          {...input}
          disabled={!isEditable}
          placeholder={placeholder}
          value={inputv}
          onChange={onInputCANGE}
        />

        <InputGroup.Button onClick={onEditClick}>
          <Icon icon={isEditable ? 'close' : 'edit2'} />
        </InputGroup.Button>
        {isEditable && (
          <InputGroup.Button onClick={onSaveClick}>
            <Icon icon={isEditable ? 'check' : 'edit2'} />
          </InputGroup.Button>
        )}
      </InputGroup>
    </div>
  );
};
