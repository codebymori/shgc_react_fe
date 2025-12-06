import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

// cara penggunaan :

  // label="Get Started"
  // bgClass="bg-green-500"
  // textClass="text-black"
  // iconClass="text-yellow-300"
  // onClick={() => console.log('clicked')}

const Button = ({
  label,
  onClick,
  className = '',
  // Tailwind utility class names (default values)
  bgClass = 'bg-blue-600',
  textClass = 'text-white',
  roundedClass = 'rounded-full',
  // icon controls
  showIcon = true,
  Icon = FiArrowRight,
  iconSize = 25,
  iconClass = '',
  // allow passing inline styles or other button props
  style = {},
  // second word styling (when label has exactly two words)
  secondWordClass = '',
  secondWordStyle = {},
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-5 py-2 transition-all duration-200 w-fit ${bgClass} ${textClass} ${roundedClass} ${className}`}
      style={style}
      {...rest}
    >
      {/* If label is a two-word string, render second word with custom class/style */}
      {typeof (label ?? children) === 'string' ? (
        (() => {
          const text = label ?? children;
          const words = text.trim().split(/\s+/);
          if (words.length === 2) {
            return (
              <span className="font-light">
                <span>{words[0]}</span>
                <span className={`${secondWordClass}`} style={secondWordStyle}>{` ${words[1]}`}</span>
              </span>
            );
          }
          return <span className="font-light">{text}</span>;
        })()
      ) : (
        <span className="font-light">{label ?? children}</span>
      )}
      {showIcon && Icon && (
        <Icon className={`${iconClass}`} size={iconSize} aria-hidden="true" />
      )}
    </button>
  );
};

export default Button;
