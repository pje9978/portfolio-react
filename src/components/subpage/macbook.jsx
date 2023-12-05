function MacBook({title}) {
    const imagePath = `${process.env.PUBLIC_URL}/images/capture/${title}/desktop1.png`;

    return ( <>
            <div className="macbook">
                {imagePath && (<>
                    <div className="screen">
                        <div className="viewport" style={{backgroundImage: `url(${imagePath})`}} >
                        </div>
                    </div>
                    <div className="base"></div>
                    <div className="notch"></div>
                </>
              )}
            </div>
        </> );
}

export default MacBook;