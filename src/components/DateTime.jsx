
import { useEffect, useState } from "react";

const dateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  day: "numeric",
  month: "short",
  hour: "numeric",
  minute: "2-digit",
  hourCycle: "h12",
})

function DateTime() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    let intervalId;
    const timeoutId = window.setTimeout(() => {
      setNow(new Date());
      intervalId = window.setInterval(() => setNow(new Date()), 60_000);
    }, 60_000 - (Date.now() % 60_000))

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    }
  }, []);

  const parts = Object.fromEntries(
    dateTimeFormatter.formatToParts(now).map(({ type, value }) => [type, value]),
  )
  const label = `${parts.weekday} ${parts.day} ${parts.month} ${parts.hour}:${parts.minute} ${parts.dayPeriod}`

  return <time dateTime={now.toISOString()}>{label}</time>;
}

export default DateTime;