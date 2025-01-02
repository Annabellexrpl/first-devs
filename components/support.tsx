
export default function Support() {
    return (
        <div className="my-auto mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
            <div className="py-16 md:py-20">
            {/* Section header */}
                <div className="nes-container is-centered is-rounded is-dark bg-opacity-65">
                    <p className="title">Support</p>
                    <form className="d-flex flex-column align-items-center" action="mailto:info@firstdevs.net" method="post" encType="text/plain">
                        <div className="nes-field">
                            <label>Name</label>
                            <input title="Name" className="nes-input input-is-dark bg-black" type="text" id="name" name="name" required/>
                        </div>
                        <div className="nes-field">
                            <label>Email</label>
                            <input title="Email" className="nes-input input-is-dark bg-black" type="email" id="email" name="email" required/>
                        </div>
                        <p id="emailHelp" className="m-4 text-info">You're email will never be shared.</p>
                        <div className="nes-field">
                            <label>Message</label>
                            <textarea title="Message" className="nes-textarea input-is-dark bg-black" id="message" name="message" rows={4} required></textarea>
                        </div>
                        <input className="nes-btn" type="submit" value="Send"/>
                    </form>
                </div>
            </div>
        </div>
    );
}