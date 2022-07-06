import { IsDateString, IsNumber, IsString } from 'class-validator';

export class CreateAlarmDto {
  @IsString()
  readonly LineNo: string;
  @IsString()
  readonly Worker: string;
  @IsNumber()
  readonly OutCheck: number;
  @IsString()
  readonly Controller: string;
  @IsNumber()
  readonly DellReport: number;
  @IsDateString()
  readonly ReportTime: Date;
  @IsDateString()
  readonly NmsTime: Date;
  @IsDateString()
  readonly FinishTime: Date;
  @IsString()
  readonly Spot: string;
  @IsString()
  readonly Cause: string;
  @IsString()
  readonly Content: string;
  @IsString()
  readonly Consider: string;
  @IsString()
  readonly Writer: string;
}
