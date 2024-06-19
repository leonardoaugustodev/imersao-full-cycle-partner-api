import { TicketKind } from '@prisma/client';
import { IsArray, IsEnum, IsNotEmpty } from 'class-validator';
export class ReserveSpotDto {
  eventId: string;

  @IsArray()
  @IsNotEmpty()
  spots: string[];

  @IsNotEmpty()
  @IsEnum(TicketKind)
  ticket_kind: TicketKind;

  email: string;
}
