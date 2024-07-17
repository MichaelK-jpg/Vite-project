import {useState, useRef, useEffect} from 'react'

export type boxProps = {
    count: number;
    onClick: () => void;
};

const Box = ({count, onClick} : boxProps) => {

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (boxRef.current) {
            const animation = boxRef.current.animate([
                { transform: 'translateY(0px)' },
                { transform: 'translateY(100px)' }
            ], {
                duration: 1000, 
                iterations: Infinity, 
                direction: 'alternate', 
                easing: 'ease-in-out' 
            })
        }
    }, []);

    const [localCount, setLocalCount] = useState(count);

    const increment = () => {
        setLocalCount(localCount + 1)
        onClick()
    }
    
    return (
        <div className='box' ref={boxRef} onClick={increment}>Count: {localCount}</div>
    )
}
export default Box