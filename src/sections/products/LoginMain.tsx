"use client"
import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { usePapouDigitalContext } from '@/components/context/usePapouDigitalContext';
interface LoginFormData {
    email: string;
    password: string;
}
const LoginMain: React.FC = () => {
    const { t } = usePapouDigitalContext();
    const searchParams = useSearchParams();
    const source = searchParams.get("source");
    const showDeveloperNotice = source === "developer";
    const showClientNotice = source === "client";
    const showPortalNotice = showDeveloperNotice || showClientNotice;
    const isLoginDisabled = showPortalNotice;
    const loginBannerTitle = showClientNotice
        ? t("clientPortalPage.authBannerTitle")
        : t("developerPage.authBannerTitle");
    const loginBannerMessage = showClientNotice
        ? t("clientPortalPage.loginUnavailableMessage")
        : t("developerPage.loginUnavailableMessage");
    const signupHref = showPortalNotice ? `/inner/sign-up?source=${source}` : "/inner/sign-up";

    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const loginData: LoginFormData = {
            email: formData.get('form_email') as string,
            password: formData.get('form_password') as string,
        };
        if (loginData) {
            alert("OK")
        }
        form.reset();
    };
    return (
        <section className="login-one">
            <div className="container">
                <div className="login-one__form">
                    {showPortalNotice && (
                        <div
                            style={{
                                marginBottom: 20,
                                padding: "16px 18px",
                                borderRadius: 10,
                                border: "1px solid #f6c25b",
                                background: "#fff7e5",
                                color: "#5a4314",
                            }}
                        >
                            <h4 style={{ marginBottom: 8 }}>{loginBannerTitle}</h4>
                            <p style={{ margin: 0 }}>
                                {loginBannerMessage}
                            </p>
                        </div>
                    )}
                    <div className="inner-title text-center">
                        <h2>Login Here</h2>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input
                                            type="email"
                                            name="form_email"
                                            id="formEmail"
                                            placeholder="Email..."
                                            disabled={isLoginDisabled}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <div className="input-box">
                                        <input
                                            type="password"
                                            name="form_password"
                                            id="formEmail"
                                            placeholder="Password..."
                                            disabled={isLoginDisabled}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12">
                                <div className="form-group">
                                    <button
                                        className="thm-btn"
                                        type="submit"
                                        data-loading-text="Please wait..."
                                        disabled={isLoginDisabled}
                                    >
                                        {isLoginDisabled ? t("common.loginOpeningSoon") : "Login Here"}
                                        <span><i className="icon-diagonal-arrow"></i></span>
                                    </button>
                                </div>
                            </div>
                            {!isLoginDisabled && (
                                <div className="remember-forget">
                                    <div className="checked-box1">
                                        <input
                                            className="form-check-input mt-1"
                                            type="checkbox"
                                            id="rememberMe"
                                            aria-label="Remember me checkbox"
                                        />
                                        <label htmlFor="rememberMe">
                                            Remember me
                                        </label>
                                    </div>
                                    <div className="forget">
                                        <Link href="#">Forget password?</Link>
                                    </div>
                                </div>
                            )}

                            <div className="create-account text-center">
                                <p>Not registered yet? <Link href={signupHref}>Create an Account</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginMain;
