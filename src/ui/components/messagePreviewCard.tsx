import formatDate from "@/utils/formatDate";

const MessagePreviewCards = ({ isFavorite }: { isFavorite: boolean }) => {
  const messageItem = {
    id: "1",
    from: {
      email: "bounced@flipkart.com",
      name: "bounced",
    },
    date: 1582729505000,
    subject: "Lorem Ipsum",
    short_description:
      "Vestibulum sit amet ipsum aliquet, lacinia nulla malesuada, ullamcorper massa",
  };

  return (
    <section className="message-preview-card">
      <div className="message-preview-section-first">
        <span className="logo">
          {messageItem?.from?.name[0]?.toUpperCase()}
        </span>
      </div>
      <div className="message-preview-section-second">
        <section className="flex-row-justify-start-gap">
          <section className="flex-row">
            <span className="color-fade">From: &nbsp;</span>
            <span className="email">
              {messageItem?.from?.name.charAt(0).toUpperCase() +
                messageItem?.from?.name.slice(1)}
            </span>
            <span className="email">&lt;{messageItem?.from?.email}&gt;</span>
          </section>
          {isFavorite ? (
            <span className="favorite-marker">
              <StarComponent /> Favorite
            </span>
            ) : null}
        
        </section>
        <section>
          <span className="color-fade">Subject: &nbsp;</span>
          <span className="subject">{messageItem?.subject}</span>
        </section>
        <section className="color-fade">
          <p>{messageItem?.short_description}</p>
        </section>
        <section >
          <span className="color-fade">
            {formatDate(messageItem?.date).toString()} &nbsp;
          </span>
        </section>
      </div>
    </section>
  );
};

const StarComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
  >
    <path
      fill="currentColor"
      d="M9.104 2.9a1 1 0 0 1 1.794 0l1.93 3.91l4.317.628a1 1 0 0 1 .554 1.706l-3.124 3.044l.738 4.3a1 1 0 0 1-1.451 1.054l-3.86-2.03l-3.862 2.03a1 1 0 0 1-1.45-1.055l.737-4.299l-3.124-3.044a1 1 0 0 1 .554-1.706l4.317-.627z"
    ></path>
  </svg>
);

export default MessagePreviewCards;
