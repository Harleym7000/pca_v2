import React from "react";
import { Button } from "react-bootstrap";

export default function HomeTextOverlay() {
    return (
        <>
            <div className="homeTextOverlay">
                <h2 className="tagline">Portstewart Community Association</h2>
                <h3 className="text-white">Serving the Portstewart Community</h3>
                <div className="mt-2 homeButtons">
                    <Button variant="warning" size="lg" className="mt-4 mr-3 homeButton">
                        FIND OUT MORE
                    </Button>
                    <Button variant="warning" size="lg" className="mt-4 ml-5 joinTodayButton">
                        GET INVOLVED
                    </Button>
                </div>
            </div>
        </>
    )
}
