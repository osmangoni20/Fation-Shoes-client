
const Footer = () => {
    return (
        <div>
  <footer className="footer sm:flex sm:flex-wrap  sm:justify-between p-10 bg-[#514F4D] text-white">
  <nav className="">
    <h6 className="footer-title text-white">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-white">Company</h6> 
    <a href="about" className="link link-hover">About us</a>
    <a href="contact" className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-white">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title ">Newsletter</h6> 
    <fieldset className="form-control md:w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join w-full">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-ite" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;