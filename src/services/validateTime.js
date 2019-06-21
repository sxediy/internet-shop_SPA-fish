import moment from 'moment';

const VALIDATE_PERIOD = 60;


const timeIsExpire = (unit) => (lastTime) => {
  const diff = moment().diff(lastTime, unit);
  console.log(`Обновление доступно через ${VALIDATE_PERIOD - diff} ${unit}`);
  return lastTime ? diff >= VALIDATE_PERIOD : true;
};


export const timeIsExpireInMinutes = timeIsExpire('minutes');
export const timeIsExpireInSeconds = timeIsExpire('second');
