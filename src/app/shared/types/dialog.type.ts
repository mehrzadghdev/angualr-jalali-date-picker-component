export interface DialogConfig<T> {
    data?: T;
    width?: string;
    height?: string;
};

export interface DialogResult<T> {
    success: boolean;
    data?: T;
};

export enum dialogCssClasses {
    mobileFriendlyClass = 'mobile-like-dialog',
    tabFriendlyClass = 'tab-friendly-dialog',
    fullScreenClass = 'full-screen-dialog',
    transformClass = 'transform-dialog',
}
