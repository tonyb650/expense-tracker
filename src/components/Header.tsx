import { checkUser } from '@/lib/check-user'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/nextjs'

const Header = async () => {
  const user = await checkUser()

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <h2>Expense Tracker</h2>
        <div>
          <SignedOut>
            <SignInButton/>
          </SignedOut>
          <SignedIn>
            <SignOutButton/>
          </SignedIn>

        </div>
      </div>
    </nav>
  )
}

export default Header