import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode,
    size?: '14' | '16' | '18'
}