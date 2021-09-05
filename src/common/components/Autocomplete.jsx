import React, { useRef, memo } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

const CustomizedAutocomplete = ({
  id,
  name,
  value,
  options,
  label,
  placeholder,
  limitTags,
  variant,
  handleSelect,
}) => {
  const classes = useStyles();

  const getOptionLabel = useRef((option) => option.title || option.name);

  const getOptionSelected = useRef((option, val) => option === val);

  const renderInput = useRef((params) => (
    <TextField
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...params}
      variant={variant}
      label={label}
      placeholder={placeholder}
    />
  ));

  const renderOption = useRef((option, { inputValue }) => {
    const matches = match(option.title, inputValue);
    const parts = parse(option.title, matches);

    return (
      <div>
        {parts.map((part) => (
          <span
            key={part.text}
            style={{ fontWeight: part.highlight ? 700 : 400 }}
          >
            {part.text}
          </span>
        ))}
      </div>
    );
  });

  const handleChange = useRef(
    (e, currentValue) => handleSelect(e, currentValue, name),
  );

  return (
    <div className={classes.root}>
      <Autocomplete
        id={id}
        name={name}
        value={value}
        options={options}
        fullWidth
        multiple
        filterSelectedOptions
        limitTags={limitTags}
        onChange={handleChange.current}
        getOptionLabel={getOptionLabel.current}
        getOptionSelected={getOptionSelected.current}
        renderInput={renderInput.current}
        renderOption={renderOption.current}
      />
    </div>
  );
};

CustomizedAutocomplete.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.shape({})),
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  limitTags: PropTypes.number,
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  handleSelect: PropTypes.func.isRequired,
};

CustomizedAutocomplete.defaultProps = {
  value: [],
  label: '',
  placeholder: '',
  limitTags: 1,
  variant: 'outlined',
};

export default memo(CustomizedAutocomplete);
