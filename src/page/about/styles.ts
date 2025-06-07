import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const RightSection = styled.div`
  flex: 1;
  padding: 1rem;
  max-height: 800px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5565e8;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
    color: #c084fc;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color:rgb(255, 255, 255);
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  gap: 1rem;
`;

export const TechScrollWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 1rem 0;
`;

export const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #13131f;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 1.5rem;
  white-space: nowrap;
`;

export const TestimonialCard = styled.div`
  max-width: 700px;
  background-color: #13131f;
  color: white;
  padding: 1.2rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .user-info {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    .user-icon {
      color: #607b96;
    }

    .username {
      font-weight: bold;
      color: #5565e8;
    }

    .role {
      color: #607b96;
      font-size: 0.875rem;
    }
  }
`;

export const SocialIcon = styled.div`
  cursor: pointer;
`;

export const CardBody = styled.div`
  margin-top: 0.8rem;
  font-size: 0.95rem;
  line-height: 1.5;
`;