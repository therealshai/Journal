const Card = (props) => {
    const { img, content } = props;

    return (
        <div className="bg-slate-200 w-[600px] h-[300px] rounded-md border-b-2 border-gray-500 
        flex mx-auto my-10 justify-center items-center"> 
            
            <img src={img} className="w-2/3 flex h-full object-cover rounded-l-md" /> 
            <p className="w-1/3 p-4 text-center flex items-center justify-center">
                 {content}
            </p>
        </div>
    );
}

export default Card;
