import logo from '../../assets/logo.png';
const Logo = () => {
    return (
        <div>
            <figure className=''>
                <img className='h-[80px] w-[100px] rounded-md' src={logo} alt='logo'/>
            </figure>
        </div>
    );
};

export default Logo;