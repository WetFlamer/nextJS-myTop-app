import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";
import cn from "classnames";
export const Tag = ({
  size,
  children,
  color = "ghost",
  className,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <>
      <div
        className={cn(styles.tag, {
          [styles.s]: size == "s",
          [styles.m]: size == "m",
          [styles.ghost]: color == "ghost",
          [styles.red]: color == "red",
          [styles.gray]: color == "gray",
          [styles.green]: color == "green",
          [styles.primary]: color == "primary",
        })}
        {...props}
      >
        {href ? <a href={href}>{children}</a> : <>{children}</>}
      </div>
    </>
  );
};
