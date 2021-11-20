import React from 'react';
import { useSelector } from 'react-redux';
import { GlobalSvgSelector } from '../../../../../assets/svg/GlobalSvgSelector';
import { ErrorHandler } from '../../../../../shared/ErrorHandler/ErrorHandler';
import { Loader } from '../../../../../shared/Loader/Loader';
import { RootState } from '../../../../../store/store';
import s from "./HourlyWeather.module.scss";

interface Props {

}

export const HourlyWeather = (props: Props) => {

    const { isHourlyWeatherFetching, hourlyWeatherList, hourlyWeatherResponse } = useSelector((state: RootState) => state.hourlyWeatherReducer)
    return (
        <div className={s.componentWrapper}>
            {!isHourlyWeatherFetching ?
                hourlyWeatherResponse.isSuccessful ?
                    <table className={s.table}>
                        <tbody>
                            <tr>
                                {
                                    hourlyWeatherList.map((hour) => (
                                        <td className={s.information}>
                                            <div className={s.time}>
                                                {hour.time}
                                            </div>
                                        </td>
                                    ))
                                }
                            </tr>
                            <tr>
                                {
                                    hourlyWeatherList.map((hour) => {
                                        if (hour.temp_number >= 0) {
                                            return (
                                                <td className={s.aboveZero}>
                                                    <div className={s.wrapper}>
                                                        <div className={s.temp}>
                                                            {hour.temperature}
                                                        </div>
                                                        <div className={s.column} style={{ height: hour.temp_number * 0.2 + "rem" }}>
                                                        </div>
                                                    </div>
                                                </td>
                                            )
                                        }
                                        else {
                                            return (
                                                <td className={s.aboveZero}>
                                                    <div className={s.wrapper}></div>
                                                </td>
                                            )
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    hourlyWeatherList.map((hour) => {
                                        if (hour.temp_number >= 0) {
                                            return (
                                                <td className={s.belowZero}>
                                                    <div className={s.wrapper}></div>
                                                </td>
                                            )
                                        }
                                        else {
                                            return (
                                                <td className={s.belowZero}>
                                                    <div className={s.wrapper}>
                                                        <div className={s.column} style={{ height: Math.abs(hour.temp_number) * 0.2 + "rem" }}></div>
                                                        <div className={s.temp}>
                                                            {hour.temperature}
                                                        </div>
                                                    </div>
                                                </td>
                                            )
                                        }
                                    })
                                }
                            </tr>
                            <tr>
                                {
                                    hourlyWeatherList.map((hour) => (
                                        <td className={s.parameters}>
                                            <div className={s.parametersWrapper}>
                                                <div className={s.uvi}>
                                                    <span>uvi: </span>
                                                    {hour.uvi}
                                                </div>
                                            </div>
                                        </td>
                                    ))
                                }
                            </tr>
                            <tr>
                                {
                                    hourlyWeatherList.map((hour) => (
                                        <td className={s.parameters}>
                                            <div className={s.parametersWrapper}>
                                                <div className={s.weatherIcon}>
                                                    <GlobalSvgSelector scope={hour.logo.scope} name={hour.logo.name} />
                                                </div>
                                            </div>
                                        </td>
                                    ))
                                }
                            </tr>
                            <tr>

                                {
                                    hourlyWeatherList.map((hour) => (
                                        <td className={s.parameters}>
                                            <div className={s.parametersWrapper}>
                                                <div>
                                                    {hour.description}
                                                </div>
                                            </div>
                                        </td>
                                    ))
                                }
                            </tr>
                        </tbody>
                    </table>
                    : <ErrorHandler message={hourlyWeatherResponse.message} />
                : <Loader />
            }
        </div>
    )
}