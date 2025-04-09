export default function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'short', day: '2-digit' };
  const formatted = new Intl.DateTimeFormat('en-US', options).format(date);
  
  return formatted;
}

export const DefaultColumn = ({ children }) => {
    return (
      <div className='w-full px-4 md:w-1/2 lg:w-full'>
        <div className='mb-12'>{children}</div>
      </div>
    )
  }
  
 export const DefaultInput = ({name='DefaultInput',placeholder='Placeholder',width='w-90'}) => {
    return (
      <>
         <label  htmlFor={`name`} className='mb-[10px] block text-start text-base font-inter600 text-white'>
          {`${name}`}
        </label>  
        <div className='relative'>
          <input
            type='text'
            placeholder={placeholder}
            id={`name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${width} bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2`}/>
        </div>
      </>
    )
  }
  
 export  const ActiveInput = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Active Input
        </label>
        <input
          type='text'
          placeholder='Active Input'
          className='w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
        />
      </>
    )
  }
  
 export  const DisabledInput = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Disabled Input
        </label>
        <input
          type='text'
          placeholder='Active Input'
          disabled
          className='w-full rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2 dark:disabled:bg-dark-4 dark:disabled:border-dark-4'
        />
      </>
    )
  }
  
 export  const NameInput = ({width='w-90',name,setName,section=''}) => {
    return (
      <>
        <label  htmlFor={`name${section}`} className='mb-[10px] block text-base font-inter600 text-white'>
          Name
        </label>
        <div className='relative'>
          <input
            type='text'
            placeholder='Devid Jhon'
            id={`name${section}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${width} bg-transparent rounded-md border border-stroke py-[10px] pr-3 pl-12 outline-none transition focus:border-greenPrimary active:border-greenPrimary disabled:cursor-default disabled:bg-gray-2 font-extralight text-white`}
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.72 12.886a4.167 4.167 0 0 1 2.947-1.22h6.666a4.167 4.167 0 0 1 4.167 4.167v1.666a.833.833 0 1 1-1.667 0v-1.666a2.5 2.5 0 0 0-2.5-2.5H6.667a2.5 2.5 0 0 0-2.5 2.5v1.666a.833.833 0 1 1-1.667 0v-1.666a4.17 4.17 0 0 1 1.22-2.947ZM10 3.333a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-4.166 2.5a4.167 4.167 0 1 1 8.333 0 4.167 4.167 0 0 1-8.333 0Z"
                opacity={0.8}
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#9CA3AF"
              />
            </svg>
          </span>
        </div>
      </>
    )
  }
  
 export  const EmailInput = ({width='w-90',email,setEmail,section=''}) => {
    return (
      <>
        <label htmlFor={`email${section}`} className='mb-[10px] text-start block text-base font-inter600 text-white'>
          Email
        </label>
        <div className='relative'>
          <input
            type='email'
            id={`email${section}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='info@yourmail.com'
            className={` ${width} bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-greenPrimary active:border-greenPrimary disabled:cursor-default disabled:bg-gray-2 font-extralight text-white`}
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#9CA3AF">
                <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
                <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
              </g>
            </svg>
          </span>
        </div>
      </>
    )
  }
  
 export  const CompanyNameInput = ({width='w-90',companyName,setCompanyName,section=''}) => {
    return (
      <>
        <label htmlFor={`companyName${section}`} className='w-32 mb-[10px] block text-base font-inter600 text-white'>
          Company Name
        </label>
        <div className='relative'>
          <input
            type='text'
            id={`companyName${section}`}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder='Pimjo Labs'
            className={` ${width} bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-greenPrimary active:border-greenPrimary disabled:cursor-default disabled:bg-gray-2 font-extralight text-white`}
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.33398 6.66667C2.87375 6.66667 2.50065 7.03976 2.50065 7.5V15.8333C2.50065 16.2936 2.87375 16.6667 3.33398 16.6667H16.6673C17.1276 16.6667 17.5007 16.2936 17.5007 15.8333V7.5C17.5007 7.03976 17.1276 6.66667 16.6673 6.66667H3.33398ZM0.833984 7.5C0.833984 6.11929 1.95327 5 3.33398 5H16.6673C18.048 5 19.1673 6.11929 19.1673 7.5V15.8333C19.1673 17.214 18.048 18.3333 16.6673 18.3333H3.33398C1.95327 18.3333 0.833984 17.214 0.833984 15.8333V7.5Z"
                  fill="#9CA3AF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.56622 2.39825C7.03506 1.92941 7.67094 1.66602 8.33398 1.66602H11.6673C12.3304 1.66602 12.9662 1.92941 13.4351 2.39825C13.9039 2.86709 14.1673 3.50297 14.1673 4.16602V17.4993C14.1673 17.9596 13.7942 18.3327 13.334 18.3327C12.8737 18.3327 12.5006 17.9596 12.5006 17.4993V4.16602C12.5006 3.945 12.4129 3.73304 12.2566 3.57676C12.1003 3.42048 11.8883 3.33268 11.6673 3.33268H8.33398C8.11297 3.33268 7.90101 3.42048 7.74473 3.57676C7.58845 3.73304 7.50065 3.945 7.50065 4.16602V17.4993C7.50065 17.9596 7.12755 18.3327 6.66732 18.3327C6.20708 18.3327 5.83398 17.9596 5.83398 17.4993V4.16602C5.83398 3.50297 6.09738 2.86709 6.56622 2.39825Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </>
    )
  }
  
 export  const CurrencyInput = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Currency
        </label>
        <div className='flex items-center'>
          <span className='h-full rounded-tl-md rounded-bl-md border border-r-0 border-stroke dark:border-dark-3 bg-gray-2 dark:bg-dark-2 py-[10px] px-4 text-base uppercase text-body-color dark:text-dark-6'>
            USD
          </span>
          <input
            type='text'
            placeholder='Pimjo Labs'
            className='w-full bg-transparent rounded-br-md rounded-tr-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-5 text-dark-6 outline-none transition focus:border-greenPrimary active:border-greenPrimary disabled:cursor-default disabled:bg-gray-2'
          />
        </div>
      </>
    )
  }
  
 export  const InvalidInput = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Email
        </label>
        <div className='relative'>
          <input
            type='email'
            placeholder='Devid Jhon'
            className='w-full bg-transparent rounded-md border border-red py-[10px] pl-5 pr-12 text-dark-6 outline-none transition'
          />
          <span className='absolute top-1/2 right-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.9987 2.50065C5.85656 2.50065 2.4987 5.85852 2.4987 10.0007C2.4987 14.1428 5.85656 17.5007 9.9987 17.5007C14.1408 17.5007 17.4987 14.1428 17.4987 10.0007C17.4987 5.85852 14.1408 2.50065 9.9987 2.50065ZM0.832031 10.0007C0.832031 4.93804 4.93609 0.833984 9.9987 0.833984C15.0613 0.833984 19.1654 4.93804 19.1654 10.0007C19.1654 15.0633 15.0613 19.1673 9.9987 19.1673C4.93609 19.1673 0.832031 15.0633 0.832031 10.0007Z"
                fill="#DC3545"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.0013 5.83398C10.4615 5.83398 10.8346 6.20708 10.8346 6.66732V10.0007C10.8346 10.4609 10.4615 10.834 10.0013 10.834C9.54106 10.834 9.16797 10.4609 9.16797 10.0007V6.66732C9.16797 6.20708 9.54106 5.83398 10.0013 5.83398Z"
                fill="#DC3545"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16797 13.3333C9.16797 12.8731 9.54106 12.5 10.0013 12.5H10.0096C10.4699 12.5 10.843 12.8731 10.843 13.3333C10.843 13.7936 10.4699 14.1667 10.0096 14.1667H10.0013C9.54106 14.1667 9.16797 13.7936 9.16797 13.3333Z"
                fill="#DC3545"
              />
            </svg>
          </span>
        </div>
        <p className='mt-[10px] text-sm text-red'>Invalid email address</p>
      </>
    )
  }
  
 export  const StrongInput = () => {
    return (
      <>
        <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
          Email
        </label>
        <div className='relative'>
          <input
            type='email'
            placeholder='Devid Jhon'
            className='w-full bg-transparent rounded-md border border-green py-[10px] px-12 text-dark-6 outline-none transition'
          />
          <span className='absolute top-1/2 left-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.16797 10.0007C3.70773 10.0007 3.33464 10.3737 3.33464 10.834V16.6673C3.33464 17.1276 3.70773 17.5007 4.16797 17.5007H15.8346C16.2949 17.5007 16.668 17.1276 16.668 16.6673V10.834C16.668 10.3737 16.2949 10.0007 15.8346 10.0007H4.16797ZM1.66797 10.834C1.66797 9.45327 2.78726 8.33398 4.16797 8.33398H15.8346C17.2153 8.33398 18.3346 9.45327 18.3346 10.834V16.6673C18.3346 18.048 17.2153 19.1673 15.8346 19.1673H4.16797C2.78726 19.1673 1.66797 18.048 1.66797 16.6673V10.834Z"
                  fill="#9CA3AF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 2.50065C9.11594 2.50065 8.2681 2.85184 7.64298 3.47696C7.01786 4.10208 6.66667 4.94993 6.66667 5.83398V9.16732C6.66667 9.62756 6.29357 10.0007 5.83333 10.0007C5.3731 10.0007 5 9.62756 5 9.16732V5.83398C5 4.5079 5.52678 3.23613 6.46447 2.29845C7.40215 1.36077 8.67392 0.833984 10 0.833984C11.3261 0.833984 12.5979 1.36077 13.5355 2.29845C14.4732 3.23613 15 4.5079 15 5.83398V9.16732C15 9.62756 14.6269 10.0007 14.1667 10.0007C13.7064 10.0007 13.3333 9.62756 13.3333 9.16732V5.83398C13.3333 4.94993 12.9821 4.10208 12.357 3.47696C11.7319 2.85184 10.8841 2.50065 10 2.50065Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
          <span className='absolute top-1/2 right-4 -translate-y-1/2'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.0512 3.14409C11.5739 2.48584 9.9234 2.32277 8.34584 2.6792C6.76829 3.03562 5.34821 3.89245 4.29741 5.12189C3.2466 6.35133 2.62137 7.88751 2.51496 9.50132C2.40854 11.1151 2.82665 12.7201 3.70692 14.0769C4.58719 15.4337 5.88246 16.4695 7.39955 17.03C8.91664 17.5905 10.5743 17.6456 12.1252 17.187C13.6762 16.7284 15.0373 15.7808 16.0057 14.4855C16.9741 13.1901 17.4978 11.6164 17.4987 9.99909V9.2329C17.4987 8.77266 17.8718 8.39956 18.332 8.39956C18.7923 8.39956 19.1654 8.77266 19.1654 9.2329V9.99956C19.1642 11.9763 18.5242 13.9002 17.3406 15.4834C16.157 17.0666 14.4934 18.2248 12.5978 18.7853C10.7022 19.3457 8.67619 19.2784 6.82196 18.5934C4.96774 17.9084 3.38463 16.6423 2.30875 14.984C1.23286 13.3257 0.72184 11.3641 0.851902 9.39166C0.981963 7.41922 1.74614 5.54167 3.03045 4.03902C4.31477 2.53637 6.05042 1.48914 7.97854 1.05351C9.90666 0.617872 11.9239 0.817181 13.7295 1.62171C14.1499 1.80902 14.3389 2.30167 14.1516 2.72206C13.9642 3.14246 13.4716 3.3314 13.0512 3.14409Z"
                fill="#22AD5C"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9236 2.74378C19.2492 3.06906 19.2495 3.59669 18.9242 3.92229L10.5909 12.264C10.4346 12.4204 10.2226 12.5083 10.0015 12.5083C9.78042 12.5084 9.56838 12.4206 9.41205 12.2643L6.91205 9.76426C6.58661 9.43882 6.58661 8.91118 6.91205 8.58574C7.23748 8.26031 7.76512 8.26031 8.09056 8.58574L10.001 10.4962L17.7451 2.74437C18.0704 2.41877 18.598 2.41851 18.9236 2.74378Z"
                fill="#22AD5C"
              />
            </svg>
          </span>
        </div>
        <p className='mt-[10px] text-sm text-green'>Password is strong</p>
      </>
    )
  }
  
  
  export const MessageTextarea = ({width='w-90',message,setMessage,color='text-white', borderColor='border-white',section=''}) => {
    return (
      <>
        <label htmlFor={`message${section}`} className={`${color} mb-[10px] block text-base font-medium `}>
          Message
        </label>
        <div className='relative'>
          <textarea
            type='email'
            rows='6'
            id={`message${section}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Type your message'
            className={`${width} ${color} bg-transparent rounded-md border border-stroke dark:border-dark-3 p-3 pl-12 text-dark-6 outline-none transition ${borderColor} disabled:bg-gray-2`}
          />
          <span className='absolute top-[18px] left-4'>
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity={0.8}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.56622 3.23223C2.03506 2.76339 2.67094 2.5 3.33398 2.5H9.16732C9.62755 2.5 10.0006 2.8731 10.0006 3.33333C10.0006 3.79357 9.62755 4.16667 9.16732 4.16667H3.33398C3.11297 4.16667 2.90101 4.25446 2.74473 4.41074C2.58845 4.56702 2.50065 4.77899 2.50065 5V16.6667C2.50065 16.8877 2.58845 17.0996 2.74473 17.2559C2.90101 17.4122 3.11297 17.5 3.33398 17.5H15.0006C15.2217 17.5 15.4336 17.4122 15.5899 17.2559C15.7462 17.0996 15.834 16.8877 15.834 16.6667V10.8333C15.834 10.3731 16.2071 10 16.6673 10C17.1276 10 17.5006 10.3731 17.5006 10.8333V16.6667C17.5006 17.3297 17.2373 17.9656 16.7684 18.4344C16.2996 18.9033 15.6637 19.1667 15.0006 19.1667H3.33398C2.67094 19.1667 2.03506 18.9033 1.56622 18.4344C1.09738 17.9656 0.833984 17.3297 0.833984 16.6667V5C0.833984 4.33696 1.09738 3.70107 1.56622 3.23223Z"
                  fill="#9CA3AF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.6673 2.39909C16.4195 2.39909 16.1818 2.49754 16.0066 2.67278L8.25314 10.4262L7.81264 12.1882L9.57463 11.7477L17.3281 3.99427C17.5033 3.81903 17.6018 3.58135 17.6018 3.33352C17.6018 3.0857 17.5033 2.84802 17.3281 2.67278C17.1528 2.49754 16.9152 2.39909 16.6673 2.39909ZM14.8281 1.49427C15.3159 1.00647 15.9775 0.732422 16.6673 0.732422C17.3572 0.732422 18.0188 1.00647 18.5066 1.49427C18.9944 1.98207 19.2684 2.64367 19.2684 3.33352C19.2684 4.02338 18.9944 4.68498 18.5066 5.17278L10.5899 13.0894C10.4831 13.1962 10.3493 13.272 10.2028 13.3086L6.86945 14.142C6.58547 14.213 6.28506 14.1298 6.07808 13.9228C5.8711 13.7158 5.78789 13.4154 5.85888 13.1314L6.69222 9.79808C6.72885 9.65155 6.80461 9.51773 6.91141 9.41093L14.8281 1.49427Z"
                  fill="#9CA3AF"
                />
              </g>
            </svg>
          </span>
        </div>
      </>
    )
  }
  

  export const DefaultTextarea = ({width='w-90',color='text-white', borderColor='border-white'}) => {
    return (
      <>
        <label className={`mb-[10px] block text-base font-medium ${color}`}>
          Default textarea
        </label>
        <textarea
          rows='5'
          placeholder='Default textarea'
          className={`${width} ${color} bg-transparent rounded-md border border-stroke dark:border-dark-3 p-5 text-dark-6 outline-none transition  disabled:cursor-default disabled:bg-gray-2 ${borderColor}`}
        />
      </>
    )
  }