import React from 'react';

const Weather = (props) => {
    return (
        <div className="info">
            {
                props.weather.name && 
                <p className="info_key"> City : 
                <span className="info_value">{props.weather.name}</span></p>
            }
            {
                props.weather.country && 
                <p className="info_key"> Country : 
                <span className="info_value">{props.weather.country}</span></p>
            }
                        {
                props.weather.temp && 
                <p className="info_key"> Tempereatur : 
                <span className="info_value">{props.weather.temp}</span></p>
            }
            {
                props.weather.humidity && 
                <p className="info_key"> Humidity : 
                <span className="info_value">{props.weather.humidity}</span></p>
            }
            {
                props.weather.description && 
                <p className="info_key"> Description : 
                <span className="info_value">{props.weather.description}</span></p>
            }
        </div>
    );
}

export default Weather;