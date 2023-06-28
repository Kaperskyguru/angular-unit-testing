import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';
describe('ContactComponent', () => {
  let comp: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(ContactComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement;
        el = fixture.nativeElement;
      });
  });

  it('should have as text "contact page"', async () => {
    expect(comp.text).toEqual('contact page');
  });

  it('should set submitted to true', async () => {
    comp.onSubmit();
    expect(comp.submitted).toBeTruthy();
  });

  it('should call submitted method', async () => {
    fixture.detectChanges();
    spyOn(comp, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(comp.onSubmit).toHaveBeenCalledTimes(0);
  });

  it('form should be invalid', async () => {
    comp.contactForm.get('name')?.setValue('');
    comp.contactForm.get('email')?.setValue('');
    comp.contactForm.get('text')?.setValue('');
    expect(comp.contactForm.valid).toBeFalsy();
  });

  it('form should be valid', async () => {
    comp.contactForm.get('name')?.setValue('kapper');
    comp.contactForm.get('email')?.setValue('kap@kap.com');
    comp.contactForm.get('text')?.setValue('text');
    expect(comp.contactForm.valid).toBeTruthy();
  });
});
