export const APP_CONSTANTS = {
    USER: {
        COLLECTION_NAME: 'users',
    },
    INCIDENCE: {
        COLLECTION_NAME: 'incidents',
    },
    COMMENT: {
        COLLECTION_NAME: 'comments',
    },
    MESSAGES: {
        USER_UPDATED: 'User updated successfully',
        USER_ADDED: 'User added successfully',
        USER_DELETED: 'User deleted successfully',
        INCIDENT_UPDATED: 'Incident updated successfully',
        INCIDENT_ADDED: 'Incident added successfully',
        INCIDENT_DELETED: 'Incident deleted successfully',
        CONFIRMATION_PROMPT: 'Are you sure you want to delete this item?',
    },
    UI_ELEMENTS: {
        MODAL: {
            BTN_CANCEL: 'Cancel',
            BTN_SAVE: 'Save',
            BTN_ADD: 'Create',
            TITLE_SAVE: 'Edit',
            TITLE_ADD: 'Add',
        },
        FILTER_LABEL: 'Filter...',
        FILTER_PLACEHOLDER: 'Search...',
        TABLE: {
          BTN_VIEW: 'Viwe',
          BTN_EDIT: 'Edit',
          BTN_DELETE: 'Delete',
          PAGINATOR_LABEL: 'Select page of items',
        },
        TOOLBAR: {
            HOME_LINK_TEXT: 'Home',
            HOME_LINK_ARIA_LABEL: 'Go to Home page',
            USERS_LINK_TEXT: 'Users',
            USERS_LINK_ARIA_LABEL: 'Go to Users list',
            NEW_USER_BUTTON_TEXT: 'New user',
            NEW_USER_BUTTON_ARIA_LABEL: 'Add a new user',
            INCIDENTS_LINK_TEXT: 'Incidents',
            INCIDENTS_LINK_ARIA_LABEL: 'Go to Incidents list',
            NEW_INCIDENT_BUTTON_TEXT: 'New incident',
            NEW_INCIDENT_BUTTON_ARIA_LABEL: 'Add a new incident',
            COMMENTS_LINK_TEXT: 'Comments',
            COMMENTS_LINK_ARIA_LABEL: 'Go to Comments list',
            NEW_COMMENT_BUTTON_TEXT: 'New comment',
            NEW_COMMENT_BUTTON_ARIA_LABEL: 'Add a new comment',
        },
        AUTH: {
            LOGIN: {
                TITLE: 'Sign In',
                GOOGLE_BUTTON_TEXT: 'Sign in with Google',
                EMAIL_LABEL: 'Your email',
                PASSWORD_LABEL: 'Password',
                SUBMIT_BUTTON_TEXT: 'Sign In',
                NO_ACCOUNT_TEXT: "Don't have an account?",
                CREATE_ACCOUNT_LINK_TEXT: 'Create an account',
            },
            SIGNUP: {
                TITLE: 'Create an Account',
                GOOGLE_BUTTON_TEXT: 'Sign up with Google',
                EMAIL_LABEL: 'Your email',
                PASSWORD_LABEL: 'Password',
                SUBMIT_BUTTON_TEXT: 'Create Account',
                ALREADY_HAVE_ACCOUNT_TEXT: 'Already have an account?',
                SIGNIN_LINK_TEXT: 'Sign In',
            },
            ERRORS: {
                REQUIRED_FIELD: 'This field is required',
                INVALID_EMAIL: 'The email must be valid',
            },
            MESSAGES: {
                USER_CREATED_SUCCESS: 'User created successfully',
                WELCOME_BACK: 'Welcome back',
                GENERAL_ERROR: 'An error occurred',
            }        
        }
    }
}
