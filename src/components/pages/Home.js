import React from 'react'
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';

export default function Home() {
    let history = useHistory();

    const goToDashboard = () => {
        history.push({
            pathname: '/list'
        })
    }

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            Welcome!
            <div className="ml-2">
                <Button onClick={goToDashboard} color="primary" outline>
                    Explore
                </Button>
            </div>
        </div>
    )
}
