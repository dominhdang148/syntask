import { TicketType } from '../enum/ticket-type';

// NOTE: Add other field if need
export interface TicketOverview {
  id: string;
  title: string;
  ticketNumber: number;
  ticketStatus: string;
  urlSlug: string;
  ticketType: TicketType;
  // TODO: display as Project object
  projectName: string;
  projectImageUrl: string;
  visible: boolean;
}
