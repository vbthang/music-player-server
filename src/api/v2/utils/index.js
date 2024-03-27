'use strict'

const ARTISTS = {
    'IW67EI9E': 'NH4T',
    'IW7A6FZ7': 'Tama',
    'IW76U6BU': 'DanhKa',
    'IW6ZAAB8': 'ACV',
    'IW6ZZ690': 'HIEUTHUHAI',
    'IWZFEEU7': 'Đạt G',
    'IW66Z6DB': 'Ricky',
    'IW7CU00E': 'Ngân Ngân',
    'IW67E9CO': 'Thiên Tú',
    'IW7EAD7O': 'DT',
    'IW6ZC0DZ': 'TVk',
    'IWZ9ZZB6': 'Hoàng Thùy Linh',
    'IW76FIUO': 'Sino',
    'IW67EOAU': 'Phong Max',
    'IW67DFAE': 'Freak D',
    'IW77WE69': 'TLong',
    'IWZFDF86': 'Unknown Artist',
    'IWZ97F9E': 'Lê Chí Trung',
    'IWZ98O7W': 'Phan Mạnh Quỳnh',
    'IW76EDEC': 'Dunghoangpham',
    'IW76FDO7': 'Đạt Long Vinh',
    'IW6ZZBOW': 'Drum7',
    'IW6BZA76': 'Thành Đạt',
    'IW6UF090': 'Keyo',
    'IW7U9C08': 'An Clock',
    'IW76DOIC': 'H-Kray',
    'IW6A7CEE': 'Nal',
    'IWZ96U0F': 'Emily',
    'IW67D9EI': 'Phát Hồ',
    'IW769ZEB': 'Unknown Artist',
    'IWZ976C7': 'Châu Khải Phong',
    'IWZ9ZB7D': 'Khang Việt',
    'IW7OOZ0O': 'Chu Thúy Quỳnh',
    'IW6ZUZI8': 'Quân A.P',
    'IW78Z0OB': 'Gold MK',
    'IW6ACZZE': 'Phát Huy T4',
    'IW6BW7E9': 'Út Nhị',
    'IW6Z8UUB': 'Diệu Kiên',
    'IWZ97D7C': 'Hoài Lâm',
    'IW8WBOW8': 'N2L',
    'IW6W7BII': 'La Hoàng Quý',
    'IWZ9DDFI': 'Hòa Minzy',
    'IWZ9EDAE': 'Trương Thảo Nhi',
    'IW68U68B': 'BMZ',
    'IW68CC9Z': 'Thái Học',
    'IW6WCUO8': 'LyLy',
    'IW6ZBEOC': 'Duy Phước',
    'IW6ZZC60': 'ViAM',
    'IWZ976Z7': 'Đông Thiên Đức',
    'IWZAZFCO': 'Quang Hùng MasterD',
    'IW6W88A6': 'Aki Khoa',
    'IW7ZED8B': 'Nguyễn Vĩ',
    'IW6WCI7U': 'Jack - J97',
    'IW7BADWD': 'CT',
    'IWZ96C8Z': 'Trung Quân'
}

const getArtistById = (artists) => {
    let artist_names = artists.reduce((acc, element) => {
        acc.push(ARTISTS[element]);
        return acc;
    }, []);
    return artist_names.join(',');
}

module.exports = {
    getArtistById
}