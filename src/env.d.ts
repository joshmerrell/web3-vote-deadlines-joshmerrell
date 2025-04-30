/// <reference types="astro/client" />

interface State {
    label: string;
    value: string;
    deadline: string;
    primaryDeadline: string;
    primaryDate: string;
    url: string;
    onlineAccepted: boolean;
    lastMinuteAccepted: boolean;
    emoji: string;
}