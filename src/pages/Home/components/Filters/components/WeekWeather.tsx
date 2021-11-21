import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import s from './WeekWeather.module.scss';
import { Day } from './Day';
import { ErrorHandler } from "../../../../../shared/ErrorHandler/ErrorHandler";
import { Loader } from "../../../../../shared/Loader/Loader";
import { NavLink } from "react-router-dom";
interface Props {

}

export const WeekWeather = (props: Props) => {
    const { weekWeatherList, isWeekWeatherFetching, weekWeatherResponse } = useSelector((state: RootState) => state.weekWeatherReducer);
    return (
        <div>
            {!isWeekWeatherFetching ?
                weekWeatherResponse.isSuccessful ?
                <div>
                    <div className={s.daysWrapper}>
                        {
                            weekWeatherList.map((day) => (
                                <Day day={day} key={day.date} />
                            ))
                        }

                    </div>
                    <div className={s.detailedForecatsLink}>
                    <NavLink className="button-prime" to="/detailed-week-forecast">open detailed week forecast</NavLink>
                    </div>
                   </div>
                    : <ErrorHandler message={weekWeatherResponse.message} />
                : <Loader />
            }
        </div>
    )
}