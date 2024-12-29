import IconStar from "./icons/icon-star";

export interface IButtonProps {
  key: string;
  label: string;
  classNames: string;
  withText?: boolean;
  withIcon?: boolean;
  iconPosition?: "left" | "right";
  iconSize?: 20 | 24;
  iconColor?: "#FFF" | "#525252" | "#000" | "#4338CA";
}

export default function Button({
  label,
  classNames,
  withText = true,
  withIcon = false,
  iconPosition = undefined,
  iconSize = 20,
  iconColor = "#4338CA"
}: Readonly<IButtonProps>) {
  return (
    <div className={"flex items-center font-medium" + " " + classNames}>
      {withIcon && iconPosition === "left" ? (
        <IconStar
          size={iconSize}
          color={iconColor}
        />
      ) : null}

      {withText ? label : null}

      {withIcon && iconPosition === "right" ? (
        <IconStar
          size={iconSize}
          color={iconColor}
        />
      ) : null}

      {!withText && withIcon && iconPosition === undefined ? (
        <IconStar
          size={iconSize}
          color={iconColor}
        />
      ) : null}
    </div>
  );
}
