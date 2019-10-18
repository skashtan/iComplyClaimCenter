package acc.mir.helper

/**
 * Created by sara.kashtan on 10/18/2019.
 */
enhancement MirReportableEnhancement : MirReportable_Acc {

  static function initMirReportable(exposure : Exposure) : MirReportable_Acc {
    exposure.mirReportable_Acc = new MirReportable_Acc()
    return exposure.mirReportable_Acc
  }
}
