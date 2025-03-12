document.addEventListener('DOMContentLoaded', () => {
    setupModals();
    setupFormValidation();
    loadFeaturedEvents();
    setupNavigationLinks();
    setupSearch();
});

function setupModals() {
    const modals = {
        login: document.getElementById('loginModal'),
        signup: document.getElementById('signupModal'),
        forgotPassword: document.getElementById('forgotPasswordModal')
    };

    const triggers = {
        login: document.getElementById('loginBtn'),
        signup: document.getElementById('signupBtn'),
        forgotPassword: document.getElementById('forgotPasswordLink'),
        loginLink: document.getElementById('loginLink'),
        signupLink: document.getElementById('signupLink')
    };

    const closeButtons = document.querySelectorAll('.modal-close');

    triggers.login.addEventListener('click', () => show(modals.login));
    triggers.signup.addEventListener('click', () => show(modals.signup));
    triggers.forgotPassword.addEventListener('click', (e) => {
        e.preventDefault();
        hide(modals.login);
        show(modals.forgotPassword);
    });
    triggers.loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        hide(modals.signup);
        show(modals.login);
    });
    triggers.signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        hide(modals.login);
        show(modals.signup);
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            hide(modals.login);
            hide(modals.signup);
            hide(modals.forgotPassword);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === modals.login) {
            hide(modals.login);
        }
        if (e.target === modals.signup) {
            hide(modals.signup);
        }
        if (e.target === modals.forgotPassword) {
            hide(modals.forgotPassword);
        }
    });

    function show(modal) {
        modal.style.display = 'flex';
    }

    function hide(modal) {
        modal.style.display = 'none';
    }
}

function setupNavigationLinks() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const homeLink = document.querySelector('a.logo');
    const footerLinks = document.querySelectorAll('footer a');
    const categoryLinks = document.querySelectorAll('.category-content a');
    const eventLinks = document.querySelectorAll('.event-actions a');

    [...navLinks, ...footerLinks, ...categoryLinks, ...eventLinks].forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            handleNavigation(link.getAttribute('href'));
        });
    });

    homeLink && homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        handleNavigation('index.html');
    });
}

function handleNavigation(url) {
    console.log(`Navigating to: ${url}`);
    window.location.href = url;
}

function setupFormValidation() {
    const forms = {
        login: document.getElementById('loginForm'),
        signup: document.getElementById('signupForm'),
        forgotPassword: document.getElementById('forgotPasswordForm')
    };

    forms.login && forms.login.addEventListener('submit', handleLogin);
    forms.signup && forms.signup.addEventListener('submit', handleSignup);
    forms.forgotPassword && forms.forgotPassword.addEventListener('submit', handleForgotPassword);
}