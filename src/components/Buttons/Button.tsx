import React, {useEffect, useState} from 'react';

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<any>;
}

// https://react-bootstrap.github.io/components/buttons/
export const Button: React.FC<ButtonProps> = ({onClick = async () => {}, children, className = ''}) => {
  const [error, setError] = useState(false);
  const [event, setEvent] = useState<React.MouseEvent<HTMLButtonElement> | null>(null);

  useEffect(() => {
    if (event) {
      onClick(event)
          .catch(async () => {
            setError(true);
            setTimeout(() => setError(false), 1000);
          })
          .finally(() => {
            setEvent(null);
          });
    }
  }, [event]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEvent(e);
  };

  let content;
  let disabled: boolean;
  if (error) {
    disabled = true;
    content = 'Error';
  } else if (event) {
    disabled = true;
    content = 'Loading...';
  } else {
    disabled = false;
    content = children;
  }

  return (
    <button
      type="button"
      className={`button ${error ? 'button--red' : className}`}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
    >
      {content}
    </button>
  );
};

export default Button;
