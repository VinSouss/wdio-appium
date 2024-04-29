import addNoteScreen from "./add-note.screen";

class EditNoteScreen {
  get firstNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
  }
  get moreIcon() {
    return $('~More');
  }
  get deleteIcon() {
    return $('//*[@text="Delete"]');
  }
  get navIcon() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
  }
  get trashCanItem() {
    return $('//*[@text="Trash Can"]');
  }

  async skipTutorial() {
    await addNoteScreen.skipBtn.click();

    await expect(addNoteScreen.addNoteTxt).toBeDisplayed();
  }

  async addAndSaveNote(noteHeading: string, noteBody: string) {
    await addNoteScreen.addNoteTxt.click();
    await addNoteScreen.textOption.click();
    await expect(addNoteScreen.textEditing).toBeDisplayed();

    // add note title
    await addNoteScreen.noteHeading.addValue(noteHeading);

    // add note body
    await addNoteScreen.noteBody.addValue(noteBody);

    // save the changes
    await addNoteScreen.saveNote();

    // assertion
    await expect(addNoteScreen.editBtn).toBeDisplayed();
    await expect(addNoteScreen.viewNote).toHaveText(noteBody);
  }
}
export default new EditNoteScreen();
