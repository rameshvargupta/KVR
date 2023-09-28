import React, { useEffect } from 'react'

const Timer = () => {
    useEffect(() => {
        let ele = document.getElementById("inner");
        function getdata() {
            var timer;
            var sec = 0;

            setTimeout(() => {
                timer = setInterval(() => {
                    ele.innerHTML = sec;
                    sec++;

                    if (sec === 201) {
                        clearInterval(timer);
                    }
                }, 20);

            }, 2000);
        }
        getdata();
    }, []);
    useEffect(() => {
        let ele = document.getElementById("inner1");
        function getdata() {
            var timer;
            var sec = 0;

            setTimeout(() => {
                timer = setInterval(() => {
                    ele.innerHTML = sec;
                    sec++;

                    if (sec === 50) {
                        clearInterval(timer);
                    }
                }, 105);

            }, 2000);
        }
        getdata();
    }, []);
    useEffect(() => {
        let ele = document.getElementById("inner2");
        function getdata() {
            var timer;
            var sec = 0;

            setTimeout(() => {
                timer = setInterval(() => {
                    ele.innerHTML = sec;
                    sec++;

                    if (sec === 161) {
                        clearInterval(timer);
                    }
                }, 25);

            }, 2000);
        }
        getdata();
    }, []);

    useEffect(() => {
        let ele = document.getElementById("inner3");
        function getdata() {
            var timer;
            var sec = 0;

            setTimeout(() => {
                timer = setInterval(() => {
                    ele.innerHTML = sec;
                    sec++;

                    if (sec === 45) {
                        clearInterval(timer);
                    }
                }, 90);

            }, 2000);
        }
        getdata();
    }, []);
    return (
        <div>
            <div className="row cont-5">

                <div className="col-6 col-lg-3">
                    <div className="box3">
                        <div className="inner2">
                            <span id='inner'>0</span><span className='plus'>+</span>
                            <h3>Project Completed</h3>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="box3">
                        <div className="inner2">
                            <span id='inner1'>0</span><span className='plus'>+</span>
                            <h3>Working Hours/Week</h3>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="box3">
                        <div className="inner2">
                            <span id='inner2'>0</span><span className='plus' >+</span>
                            <h3>Happy Customers</h3>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-lg-3">
                    <div className="box3">
                        <div className="inner2">
                            <span id='inner3'>0</span><span className='plus'>+</span>
                            <h3>Countries served</h3>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Timer
