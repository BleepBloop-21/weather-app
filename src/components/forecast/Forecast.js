import React from 'react'
import { Accordion, AccordionItemPanel, AccordionItemHeading, AccordionItem, AccordionItemButton } from "react-accessible-accordion"
import './Forecast.css'

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const Forecast = ({ data }) => {

    const currentDay = new Date().getDay();
    const forecastDays = weekDays.slice(currentDay, weekDays.length).concat(weekDays.slice(0, currentDay));

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <label className="title">Forecast for next 7 days. Click on a particular day for more information. </label>
            <br />
            <br />
            <Accordion allowZeroExpanded>
                {data.list.slice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily-item">
                                    <img src={`img/${item.weather[0].icon}.png`} alt="weather" className="small-icon" />
                                    <label className="day">{forecastDays[idx]}  </label>
                                    <label className="description">{item.weather[0].description.toUpperCase()}</label>
                                    <label className="min-max">{Math.round(item.main.temp_min)}°C  /  {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="daily-details-grid">
                                <div className="daily-details-grid-item">
                                    <label>Humidity: </label>
                                    <label>{item.main.humidity}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Feels like: </label>
                                    <label>{Math.round(item.main.feels_like)}°C</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Pressure: </label>
                                    <label>{item.main.pressure} Pa</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Clouds: </label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Wind speed: </label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="daily-details-grid-item">
                                    <label>Sea level: </label>
                                    <label>{item.main.sea_level} m</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    )
}

export default Forecast;
