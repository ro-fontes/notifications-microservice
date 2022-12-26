export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentlenghtValid = this.validateContentLength(content);

    if (!isContentlenghtValid) {
      throw new Error("Content length Error");
    }

    this.content = content;
  }
}
