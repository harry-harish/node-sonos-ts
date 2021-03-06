// Automatically generated by service-generator.js, don't change!
import { BaseService } from './base-service';
import { Track } from '../models';

/**
 * Control the sonos alarms
 *
 * @export
 * @class AlarmClockService
 * @extends {BaseService}
 */
export class AlarmClockService extends BaseService {
  readonly serviceNane: string = 'AlarmClock';
  readonly controlUrl: string = '/AlarmClock/Control';  
  readonly eventSubUrl: string = '/AlarmClock/Event';
  readonly scpUrl: string = '/xml/AlarmClock1.xml';

  //#region methods
  CreateAlarm(input: { StartLocalTime: string; Duration: string; Recurrence: string; Enabled: boolean; RoomUUID: string; ProgramURI: string; ProgramMetaData: string | Track; PlayMode: string; Volume: number; IncludeLinkedZones: boolean }):
    Promise<CreateAlarmResponse>{ return this.SoapRequestWithBody<typeof input, CreateAlarmResponse>('CreateAlarm', input); }

  DestroyAlarm(input: { ID: number }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('DestroyAlarm', input); }

  GetDailyIndexRefreshTime():
    Promise<GetDailyIndexRefreshTimeResponse>{ return this.SoapRequest<GetDailyIndexRefreshTimeResponse>('GetDailyIndexRefreshTime'); }

  GetFormat():
    Promise<GetFormatResponse>{ return this.SoapRequest<GetFormatResponse>('GetFormat'); }

  GetHouseholdTimeAtStamp(input: { TimeStamp: string }):
    Promise<GetHouseholdTimeAtStampResponse>{ return this.SoapRequestWithBody<typeof input, GetHouseholdTimeAtStampResponse>('GetHouseholdTimeAtStamp', input); }

  GetTimeNow():
    Promise<GetTimeNowResponse>{ return this.SoapRequest<GetTimeNowResponse>('GetTimeNow'); }

  GetTimeServer():
    Promise<GetTimeServerResponse>{ return this.SoapRequest<GetTimeServerResponse>('GetTimeServer'); }

  GetTimeZone():
    Promise<GetTimeZoneResponse>{ return this.SoapRequest<GetTimeZoneResponse>('GetTimeZone'); }

  GetTimeZoneAndRule():
    Promise<GetTimeZoneAndRuleResponse>{ return this.SoapRequest<GetTimeZoneAndRuleResponse>('GetTimeZoneAndRule'); }

  GetTimeZoneRule(input: { Index: number }):
    Promise<GetTimeZoneRuleResponse>{ return this.SoapRequestWithBody<typeof input, GetTimeZoneRuleResponse>('GetTimeZoneRule', input); }

  ListAlarms():
    Promise<ListAlarmsResponse>{ return this.SoapRequest<ListAlarmsResponse>('ListAlarms'); }

  SetDailyIndexRefreshTime(input: { DesiredDailyIndexRefreshTime: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetDailyIndexRefreshTime', input); }

  SetFormat(input: { DesiredTimeFormat: string; DesiredDateFormat: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetFormat', input); }

  SetTimeNow(input: { DesiredTime: string; TimeZoneForDesiredTime: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetTimeNow', input); }

  SetTimeServer(input: { DesiredTimeServer: string }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetTimeServer', input); }

  SetTimeZone(input: { Index: number; AutoAdjustDst: boolean }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('SetTimeZone', input); }

  UpdateAlarm(input: { ID: number; StartLocalTime: string; Duration: string; Recurrence: string; Enabled: boolean; RoomUUID: string; ProgramURI: string; ProgramMetaData: string | Track; PlayMode: string; Volume: number; IncludeLinkedZones: boolean }):
    Promise<boolean> { return this.SoapRequestWithBodyNoResponse<typeof input>('UpdateAlarm', input); }
  //#endregion
}

// Generated responses
export interface CreateAlarmResponse {
  AssignedID: number;
}

export interface GetDailyIndexRefreshTimeResponse {
  CurrentDailyIndexRefreshTime: string;
}

export interface GetFormatResponse {
  CurrentTimeFormat: string;
  CurrentDateFormat: string;
}

export interface GetHouseholdTimeAtStampResponse {
  HouseholdUTCTime: string;
}

export interface GetTimeNowResponse {
  CurrentUTCTime: string;
  CurrentLocalTime: string;
  CurrentTimeZone: string;
  CurrentTimeGeneration: number;
}

export interface GetTimeServerResponse {
  CurrentTimeServer: string;
}

export interface GetTimeZoneResponse {
  Index: number;
  AutoAdjustDst: boolean;
}

export interface GetTimeZoneAndRuleResponse {
  Index: number;
  AutoAdjustDst: boolean;
  CurrentTimeZone: string;
}

export interface GetTimeZoneRuleResponse {
  TimeZone: string;
}

export interface ListAlarmsResponse {
  CurrentAlarmList: string;
  CurrentAlarmListVersion: string;
}
