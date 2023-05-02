import styles from "./Paragraph.module.css";
import { ParagraphProps } from "./Paragraph.props";
import cn from "classnames";
export const Paragraph = ({
  children,
  size = "16",
  className,
...props
}: ParagraphProps): JSX.Element => {
  return (
    <p className={cn(styles.paragraph, className, {
        [styles.small]: size == "14",
        [styles.middle]: size == "16",
        [styles.big]: size == "18",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
