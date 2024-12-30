import IconStar from "./icons/icon-star";

export interface IButtonProps {
  key: string;
  label: string;
  classNames: string;
  isDisabled?: boolean;
  withText?: boolean;
  withIcon?: boolean;
  iconPosition?: "left" | "right";
  iconSize?: 20 | 24;
}

export default function Button({
  label,
  classNames,
  isDisabled = false,
  withText = true,
  withIcon = false,
  iconPosition = undefined,
  iconSize = 20
}: Readonly<IButtonProps>) {
  return (
    <button
      className={"flex items-center font-medium" + " " + classNames}
      disabled={isDisabled}
    >
      {withIcon && iconPosition === "left" ? (
        <IconStar
          size={iconSize}
          isDisabled={isDisabled}
        />
      ) : null}

      {withText ? label : null}

      {withIcon && iconPosition === "right" ? (
        <IconStar
          size={iconSize}
          isDisabled={isDisabled}
        />
      ) : null}

      {!withText && withIcon && iconPosition === undefined ? (
        <IconStar
          size={iconSize}
          isDisabled={isDisabled}
        />
      ) : null}
    </button>
  );
}
