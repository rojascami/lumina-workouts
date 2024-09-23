import { useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';

export default function RegisterPage() {
    const router = useRouter();
    const overlay = useRef(null);
    const wrapper = useRef(null);

    const onDismiss = useCallback(() => {
        router.back();
    }, [router]);

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss();
            }
        },
        [onDismiss, overlay, wrapper]
    );

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onDismiss();
        },
        [onDismiss]
    );

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.addEventListener("keydown", onKeyDown);
            return () => document.removeEventListener("keydown", onKeyDown);
        }
    }, [onKeyDown]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div className='register'>
            <form onSubmit={handleSubmit} className='register__form'>
                <div className='register__field'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div className='register__field'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                    />
                </div>
                <div className='register__field' id='contact-message'>
                    <label htmlFor="message">Message</label>
                    <input
                        type="text"
                        id="message"
                    />
                </div>
            </form>
        </div>
    );
}