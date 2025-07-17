const Home = () => {
    const handleTargetClick = (e) => {
        console.log('Target:', e.target);
    };
    const handleCurrentTargetClick = (e) => {
        console.log('Current Target:', e.currentTarget);
    };
    return (
        <div>
            <div onClick={handleTargetClick}>
                <button>Target</button>
            </div>
            <div onClick={handleCurrentTargetClick}>
                <button>CurrentTarget</button>
            </div>
        </div>
    );
};

export default Home;
