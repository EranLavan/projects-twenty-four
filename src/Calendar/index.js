import { useRef, useState } from "react"; 

import { 
	 SevenColGrid, 
	 Wrapper, 
	 HeadDays, 
	 DateControls, 
	 StyledEvent,
	 SeeMore,  
     PortalWrapper
	} from "./styled";
	
import { MOCKAPPS, DAYS } from "./conts"; 

import {
	datesAreOnSameDay, 
	getDarkColor, 
	getDaysInMonth, 
	getMonthYear, 
	nextMonth, 
	prevMonth, 
	// range, 
	// sortDays, 
    getSortedDays
	} from "./utils";

export const Calendar = () => {
	const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 12));
	const [events, setEvents] = useState(MOCKAPPS);
	const dragDateRef = useRef();
	const dragindexRef = useRef();
    const [showPortal, setShowPortal] = useState(false);
    const [portalData, setPortalData] = useState({})

	const addEvent = (date, event) => {
	  if (!event.target.classList.contains("StyledEvent")) {
		const text = window.prompt("name");
		if (text) {
		  date.setHours(0);
		  date.setSeconds(0);
		  date.setMilliseconds(0);
		  setEvents((prev) => [
			...prev,
			{ date, title: text, color: getDarkColor() }
		]);
	    };
	}
    };

const drag = (index, e) => {
	dragindexRef.current = { index, target: e.target };
};

const onDragEnter = (date, e) => {
	e.preventDefault();
	dragDateRef.current = { date, target: e.target.id };
};

const drop = (ev) => {
	ev.preventDefault();

	setEvents((prev) =>
	  prev.map((ev, index) => {
	    if (index === dragindexRef.current.index) {
		ev.date = dragDateRef.current.date;
		}
		return ev;
	    })
	);
    };

    const handleOnClickEvent = (event) => {
        setShowPortal(true)
        setPortalData(event);
    };

    const handlePortalClose = () => setShowPortal(false);

    const handleDelete = () => {
        setEvents(prevEvents => 
            prevEvents.filter((ev) => ev.title !== portalData.title)
        );
        setShowPortal(false);
    };

    return (
        <Wrapper>
            <DateControls> 
                <ion-icon 
                    onClick={() => prevMonth(currentDate, setCurrentDate)} 
                    name="arrow-back-circle-outline"
                >&#8592;</ion-icon>
		{getMonthYear(currentDate)}

                <ion-icon 
                    onClick={() => nextMonth(currentDate, setCurrentDate)}
                    name="arrow-forward-circle-outline"
                >&#8594;</ion-icon>
	        </DateControls>

            <SevenColGrid>
                {DAYS.map((day) => (
                    <HeadDays className="nonDRAG">{day}</HeadDays>
                ))}
            </SevenColGrid>

	    <SevenColGrid
		fullheight={true}
		is28Days={getDaysInMonth(currentDate) === 28}
	    >
		{getSortedDays(currentDate).map((day) => (
		    <div
			id={`${currentDate.getFullYear()}/${currentDate.getMonth()}/${day}`}
			onDragEnter={(e) =>
			  onDragEnter(
			    new Date(
				currentDate.getFullYear(),
				currentDate.getMonth(),
				day
			      ),
			      e
			    )
			  }

			onDragOver={(e) => e.preventDefault()}
			onDragEnd={drop}
			onClick={(e) =>
			    addEvent(
				new Date(
				  currentDate.getFullYear(),
				  currentDate.getMonth(),
				  day
				),
				e
			     )
			   }
			>
			
			<span
			    className={`nonDRAG ${
				datesAreOnSameDay(
				    new Date(),
				    new Date(
					currentDate.getFullYear(),
					currentDate.getMonth(),
					day
				      )
				   )
					? "active"
					: ""
				} ` }
			>

				{day}

			</span>

			<EventWrapper>
			  {events.map(
			    (ev, index) =>
				datesAreOnSameDay(
				  ev.date,
				  new Date(
				    currentDate.getFullYear(),
				    currentDate.getMonth(),
				    day
				)
			    ) && (
				<StyledEvent
				  onDragStart={(e) => drag(index, e)}
                  onClick={() => handleOnClickEvent(ev)}
				  draggable
				  className="StyledEvent"
				  id={`${ev.color} ${ev.title}`}
				  key={ev.title}
				  bgColor={ev.color}
				>
				  {ev.title}
				</StyledEvent>
			     )
			)}
			</EventWrapper>
		     </div>
		))}
	    </SevenColGrid>
      {showPortal && (
        <Portal 
            {...portalData} 
            handleDelete={handleDelete}
            handlePortalClose={handlePortalClose} 
        />
    )}
	</Wrapper>
    
    );
  };

	const EventWrapper = ({ children }) => {
	  if (children.filter((child) => child).length)
	    return (
		<>
		    {children}
		    {children.filter((child) => child).length > 2 && (
			<SeeMore
			  onClick={(e) => {
			    e.stopPropagation();
			    console.log("clicked p");
			}}
		    >
			see more...
		    </SeeMore>
		)}
		</>
	    );
	};

const Portal = ({ title, date, handleDelete, handlePortalClose }) => {
    return (
        <PortalWrapper>
            <h2>{title}</h2>
            <p>{date.toDateString()}</p>
            <ion-icon onClick={handleDelete} name="trash-outline">Delete</ion-icon>
            <ion-icon onClick={handlePortalClose} name="close-outline">&#10005;</ion-icon>
        </PortalWrapper>
    )
}

export default Calendar