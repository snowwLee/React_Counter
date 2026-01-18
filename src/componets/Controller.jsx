import './Controller.css'

const Controller =({onClickButton})=>{
    return (
        <div className='controller'>
            <button 
                className='btn'
                onClick={()=>{
                    onClickButton(-1);
                }}
            >-1</button>
            <button
                className='btn'
                onClick={()=>{
                    onClickButton(-10);
                }}
            >-10</button>
            <button
                className='btn'
                onClick={()=>{
                    onClickButton(-100);
                }}
            >-100</button>
            <button
                className='btn'
                onClick={()=>{
                    onClickButton(100);
            }}
            >+100</button>
            <button
                className='btn'
                onClick={()=>{
                    onClickButton(10);
                }}
            >+10</button>
            <button
                className='btn'
                onClick={()=>{
                    onClickButton(1)
                }}>+1</button>
        </div>
    );
}

export default Controller;