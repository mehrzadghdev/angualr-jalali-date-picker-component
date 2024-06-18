import { FormGroup } from "@angular/forms";

export abstract class CustomValidators {
    public static confirmPassword(password: string, confirmPassword: string) {
        return (formGroup: FormGroup): any => {
            const passwordControl = formGroup.controls[password];
            const confirmPasswordControl = formGroup.controls[confirmPassword];

            if (!passwordControl || !confirmPasswordControl) {
                return null;
            }

            if (confirmPasswordControl.errors && !confirmPasswordControl.errors["passwordMismatch"]) {
                return null;
            }

            if (passwordControl.value !== confirmPasswordControl.value) {
                confirmPasswordControl.setErrors({ passwordMismatch: true });
            } 
            else {
                confirmPasswordControl.setErrors(null);
            }
        }
    }
}