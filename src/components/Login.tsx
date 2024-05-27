import Link from 'next/link';

export default function Login({ email, handleEmailChange, password, handlePasswordChange, handleSubmit, setLoginState }: { email: string, handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void, password: string, handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void, setLoginState: () => void }) {
    return (<div className='register'>
        <form onSubmit={handleSubmit} className='register__form'>
            <div className='register__field'>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </div>

            <div className='register__field'>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    minLength={6}
                    required
                />
            </div>

            <div className="btn-wrapper">
                <Link href="/register" className="btn__link"><button className="btn">Register</button></Link>
                <Link href="/login" className="btn__link"><button className="btn" onClick={setLoginState}>Login</button></Link>
            </div>
        </form>
    </div>)
}