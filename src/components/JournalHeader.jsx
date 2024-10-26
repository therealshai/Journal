import worldLogo from "../assets/world-logo.svg"; // Ensure the path is correct

const JournalHeader = () => {
    return (
        <div className="flex flex-row bg-red-500 gap-5 w-screen justify-center h-9 pt-6 pb-6 items-center fixed top-0"> 
            <img src={worldLogo} alt="World Logo" className="h-6" /> 
            <span className="text-black text-lg font-bold ">My Travel Journal</span>
        </div>
    );
}

export default JournalHeader;
