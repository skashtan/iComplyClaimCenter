package acc.mir.helper

uses gw.xml.date.XmlDateTime

/**
 * Created by Sara.Kashtan on 10/5/2019.
 */
class MirDateConversionUtil {

  /**
   * Converts java.util.date into XmlDateTime
   */
  static function toXmlDateTime(date : java.util.Date) : XmlDateTime {

    var _year = date.YearOfDate
    var _month = date.MonthOfYear
    var _day = date.DayOfMonth
    var _hour = date.Hour
    var _minute = date.Minute
    var _second = date.Second

    var xmlDateTime = new XmlDateTime()
    xmlDateTime.setTimeZone(null)
    xmlDateTime.Year = _year
    xmlDateTime.Month = _month
    xmlDateTime.Day = _day
    xmlDateTime.Hour = _hour
    xmlDateTime.Minute = _minute
    xmlDateTime.Second = _second

    return xmlDateTime
  }

  /**
   * Converts XmlDateTime into java.util.date
   */
  static function toJavaDate(date : XmlDateTime) : java.util.Date {

    var javaDate = date.toCalendar().getInstance().getTime()

    return javaDate
  }
}
