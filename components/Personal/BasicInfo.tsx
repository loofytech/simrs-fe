export default function BasicInfo() {
  return (<>
    <div className="border-b gap-6 flex flex-col py-7 md:flex-row">
      <div className="w-full flex flex-col md:w-1/3">
        <p className="mb-2 font-semibold">Personal Data</p>
        <span className="text-xs text-gray-400">Your email address is your identity on Talenta is used to log in.</span>
      </div>
      <div className="grid grid-cols-2 text-sm gap-5 w-full md:w-1/3">
        <div className="font-semibold">Full name</div>
        <div>Agung Ardiyanto</div>
        <div className="font-semibold">Mobile phone</div>
        <div>082179099557</div>
        <div className="font-semibold">Email</div>
        <div>agungd3v@gmail.com</div>
        <div className="font-semibold">Phone</div>
        <div>-</div>
        <div className="font-semibold">Birthdate</div>
        <div>14 Dec 1996</div>
        <div className="font-semibold">Gender</div>
        <div>Male</div>
        <div className="font-semibold">Marital status</div>
        <div>Single</div>
        <div className="font-semibold">Blood type</div>
        <div>-</div>
        <div className="font-semibold">Religion</div>
        <div>Islam</div>
      </div>
    </div>
    <div className="flex py-7 gap-6 flex-col md:flex-row">
      <div className="w-full flex flex-col md:w-1/3">
        <p className="mb-2 font-semibold">Identity & Address</p>
        <span className="text-xs text-gray-400">Your email address is your identity on Talenta is used to log in.</span>
      </div>
      <div className="w-full grid grid-cols-2 text-sm gap-5 md:w-1/3">
        <div className="font-semibold">ID type</div>
        <div>-</div>
        <div className="font-semibold">ID number</div>
        <div>-</div>
        <div className="font-semibold">ID expiration date</div>
        <div>Permanent</div>
        <div className="font-semibold">Postal code</div>
        <div>-</div>
        <div className="font-semibold">Citizen ID address</div>
        <div>-</div>
        <div className="font-semibold">Residential address</div>
        <div>-</div>
      </div>
    </div>
  </>);
}