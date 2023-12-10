export function timestampToTimeString(timestamp) {
    const now = Math.floor(Date.now() / 1000);
    const timeDiff = now - timestamp;
    if (timeDiff < 60) {
        return "刚刚";
    } else if (timeDiff < 3600) {
        const minutesAgo = Math.floor(timeDiff / 60);
        return minutesAgo + "分钟前";
    } else if (timeDiff < 86400) {
        const hoursAgo = Math.floor(timeDiff / 3600);
        return hoursAgo + "小时前";
    } else if (timeDiff < 172800) {
        return "昨天";
    } else {
        const date = new Date(timestamp * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}
